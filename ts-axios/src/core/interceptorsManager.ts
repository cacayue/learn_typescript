import { IAxiosInterceptorsManager, RejectFn, ResolvedFn } from "../types";

interface Interceptor<T>{
  resolved: ResolvedFn<T>;
  reject?: RejectFn
}

export default class AxiosInterceptorsManager<T> implements IAxiosInterceptorsManager<T>{
  private interceptors: Array<Interceptor<T> | null>;

  /**
   *构造器
   */
  constructor() {
    this.interceptors = [];
  }

  /**
   * 使用拦截器
   * @param resolved 接收函数
   * @param reject 拒绝函数
   * @returns 生成的拦截器id
   */
  use(resolved: ResolvedFn<T>, reject?: RejectFn): number {
    this.interceptors.push( {
      resolved,
      reject
    });

    return this.interceptors.length - 1;
  }

  /**
   * 取消拦截器
   * @param id 拦截器编码
   */
  eject(id: number): void {
    let interceptor = this.interceptors[id];
    if (interceptor) {
      this.interceptors[id] = null;
    }
  }

  /**
   * 遍历拦截器
   */
  public foreach(fn:((interceptor: Interceptor<T>) => void)) {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        // 执行不为空的拦截器
        fn(interceptor);
      }
    })
  }

}