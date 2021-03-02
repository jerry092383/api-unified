/**
 * 將Promise物件重新包裝，回傳一個新的Promise，使其不管成功失敗都會回傳一個物件
 * 並利用物件的status來判斷結果
 * @param  {Promise} promiseObject Promise物件
 * @return {Promise} 重新包裝後的Promise，不管成功或失敗都會resolve一個物件
 */
export function asyncify<T>(
    promiseObject: Promise<T>,
): Promise<{
    status: boolean;
    response?: T;
    error?: any;
}> {
    return new Promise((resolve) => {
        promiseObject
            .then((res: T) =>
                resolve({
                    status: true,
                    response: res,
                }),
            )
            .catch((e: any) =>
                resolve({
                    status: false,
                    response: e,
                }),
            );
    });
}
