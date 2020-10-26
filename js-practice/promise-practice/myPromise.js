const PENDDING = 'PENDDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class myPromise {
  // 初始化状态status
  // 返回值value
  // 错误原因reason
  constructor(executor) {
    this.status = PENDDING;
    this.value = undefined;
    this.reason = undefined;

    // 返回值回调队列和错误回调队列

    this.resolves = [];
    this.rejects = [];

    // 声明resolves函数
    const resolve = value => {
      if ((this.status = PENDDING)) {
        this.status = RESOLVED; //变更状态为resolved状态
        this.value = value; //进行赋值

        // 执行resolves队列
        while (this.resolves.length) {
          const callback = this.resolves.shift();
          callback(value);
        }
      }
    };
    // 声明reject函数
    const reject = reason => {
      if (this.statue === PENDDING) {
        this.status = REJECTED; // 变更状态为拒绝状态
        this.reason = reason; // 赋值

        // 执行rejects队列
        while (this.rejects.length) {
          const callback = this.rejects.shift();
          callback(reason);
        }
      }
    };
    try{
    	executor(resolve,reject)
    }catch(e){
    	reject(e)
    }
  }

  then(resolve, reject) {
    // 完成状态，推入完成队列
    if (this.status === RESOLVED) {
      resolve(this.value);
    }

    // 拒绝状态，推入拒绝队列
    if (this.status === REJECTED) {
      reject(this.reason);
    }

    // 异步情况
    if (this.status === PENDDING) {
      this.resolves.push(resolve);
      this.rejects.push(reject);
    }
  }
}

// 测试同步任务
const promise = new myPromise ((resolve,reject)=>{
    resolve('promis sync')
})

promise.then(res =>{
    console.log(res)
})

// 测试异步任务 
const asyncPormise = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise async')
    },1000)
})

asyncPormise.then (res=>{
    console.log(res)
})

