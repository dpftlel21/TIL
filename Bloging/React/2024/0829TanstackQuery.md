# 1. Tanstack Query

React 애플리케이션에서 서버 상태 관리를 위한 라이브러리이며, 주 데이터 fetching, 캐싱, 동기화 및 서버 상태 업데이트를 쉽게 만들어주는 도구입니다.

리액트 쿼리를 사용하면 복잡한 상태 관리 로직을 줄이고, 서버 데이터 관리에 집중할 수 있어 개발 효율성이 크게 향상됩니다. 또한, 사용자에게 더 빠르고 반응성 있는 UI를 제공할 수 있습니다.


### 🧐 왜 사용할까 ?

1. `서버 상태 관리 간소화` : 리액트에서 서버 데이터를 관리하는 것은 복잡할 수 있으며, 리액트 쿼리는 이 과정을 단순화하여 개발자가 더 쉽게 데이터를 관리할 수 있게 해줍니다.  

2. `성능 최적화` : 자동 캐싱, 백그라운드 업데이트, 중복 요청 제거 등의 기능을 통해 애플리케이션의 성능을 향상시킵니다.

3. `실시간 동기화` : 서버 데이터의 변경사항을 실시간으로 동기화할 수 있어, 항상 최신 데이터를 유지할 수 있습니다.

4. `로딩 및 에러 상태 관리` : 데이터 로딩 상태와 에러 처리를 쉽게 할 수 있어, 사용자 경험을 개선할 수 있습니다.


---

### 📚 UseQuery

가장 기본적인 쿼리 훅이며, 컴포넌트에서 데이터를 가져올 때 사용합니다. 

```jsx
const data = useQuery<Type>(Option)
```

- 옵션 (Option)

|  옵션  |   설명    |   기본값    | 
| --- | ----- | ----- |
|  enabled  |  쿼리 자동 실행 여부, false일 때 pending으로 시작     |   true    |
|  gcTime   |   비활성 캐시 데이터가 메모리에 남아 있는 시간    |  5 * 60 * 1000     |
|   initialData  |  쿼리가 생성되거나 캐시되기 전에 사용하는 초기 데이터   |       |
|  initialDataUpdatedAt   |   초기 데이터의 마지막 업데이트 시간 설정    |       |
|  meta   |   활용할 메타 정보를 저장    |       |
|  networkMode  |   네트워크 모드 설정    |   `online`    |
|  notifyOnChangeProps   |  변경 시 알람을 받을 속성 설정     |       |
|  placeholderData   |   대기중인 상태에서 사용할 데이터    |       |
|  queryClient   |  커스텀 쿼리 클라이언트 연결    |       |
|  queryFn   |  데이터를 가져오는 쿼리 함수로, 꼭 데이터를 반환하거나 오류를 던져야 하고, 기본 쿼리 함수가 지정되지 않은 경우에만 `필수 옵션`    |       |
|  queryKey   |  고유한 쿼리 키(식별자), `필수 옵션`    |       |
|  queryKeyHashFn   |  쿼리 키를 해시하는 함수    |       |
|  refetchInterval  |  데이터 자동 갱신(다시 가져오기)의 시간 간격(ms)    |       |
|  refetchIntervalInBackground   |  백그라운드에서 데이터 자동 갱신 여부.    |   false    |
|  refetchOnMount   |  useQuery 연결 시 데이터 갱신 여부, true는 연결 시 데이터가 상한 경우에 갱신, always는 열결 시 데이터 항상 갱신    |   true    |
|  refetchOnReconnect   |  네트워크 재연결 시 데이터 갱신 여부    |    true   |
|  refetchOnWindowFocus   |  브라우저 화면 포커스 시 데이터 갱신 여부    |   true    |
|  retry   |  쿼리 실패 시 재시도 횟수    |   3    |
|  retryDelay   |  재시도 시간 간격(ms)    |       |
|  retryOnMount   |  useQuery 연결 시 재시도 여부    |   true    |
|  select   |  가져온 데이터를 변형(선택)하는 함수    |       |
|  staleTime   |  데이터가 상하는데 걸리는 시간(ms)    |   0    |
|  structuralSharing   |  데이터 구조의 재사용을 최적화해, 불변성을 유지하고 불필요한 리렌더링 방지    |   true   |
|  throwOnError   |  쿼리 실패 시 오류를 던질지 여부    |   undefined    |


#### ✔️ queryKey

쿼리 키(queryKey)는 쿼리를 식별하는 교유한 값으로, 배열 형태로 지정합니다. 다중 아이템 쿼리 키를 사용할 때는 아이템의 순서에따라 쿼리가 다릅니다. 또한 Prop의 값이 다를 때 쿼리는 그 값에 따라 각각 별개의 요청을 하게됩니다.

#### ✔️ queryFn

쿼리 키(queryFn)는 데이터를 가져오는 비동기 함수로, 꼭 데이터를 반환하거나 오류를 던져야 합니다. 던져진 오류는 반환되는 `Error` 객체로 확인할 수 있습니다. 

```tsx
queryFn: async () => {
      const res = await fetch('https://api.heropy.dev/v0/쿼리키?t=1000')
      const data = await res.json()
      if (!data.time) {
        throw new Error('에러 발생')
      }
      return data
    }
```

#### ✔️ select

선택 함수(select)를 사용하면 가져온 데이터를 변형할 수 있고, 쿼리 함수가 반환하는 데이터를 인수로 받아 선택 함수에서 처리하고 반환하면 최종 데이터가 됩니다. 최종 데이터의 타입은 `useQuery`의 제네릭 타입으로 선언할 수 있습니다.

| 반환 속성  | 설명  | 타입   |
|-----|-------------|-----
| `data`                | 성공적으로 가져온 데이터.                                                                                  | `TData`                                                     |
| `dataUpdatedAt`       | 최근에 데이터를 성공적으로 가져온 시간(유닉스 타임스탬프).                                                 | `number`                                                    |
| `error`               | 오류가 발생했을 때의 오류 객체. 오류가 발생하지 않았다면 `null`.                                           | `null \| TError`                                            |
| `errorUpdateCount`    | 모든 오류의 횟수.                                                                                           | `number`                                                    |
| `errorUpdatedAt`      | 최근에 오류가 발생한 시간(유닉스 타임스탬프).                                                               | `number`                                                    |
| `failureCount`        | 쿼리의 실패 횟수. 쿼리가 실패할 때마다 증가하고 쿼리가 성공하면 0으로 재설정.                              | `number`                                                    |
| `failureReason`       | 쿼리의 재시도 실패 이유. 쿼리가 성공하면 `null`로 재설정.                                                  | `null \| TError`                                            |
| `fetchStatus`         | 쿼리 함수의 현재 상태. `'fetching'`: 실행 중(`isFetching`), `'paused'`: 일시 중단됨(`isPaused`), `'idle'`: 동작 중지됨. | `'fetching' \| 'paused' \| 'idle'`                          |
| `isError`             | 쿼리 함수에서의 오류 발생 여부.                                                                            | `boolean`                                                   |
| `isFetched`           | 쿼리의 첫 데이터 가져오기가 완료되었는지 여부.                                                             | `boolean`                                                   |
| `isFetchedAfterMount` | 컴포넌트 연결 후 가져오기가 완료되었는지 여부. 컴포넌트 연결 전에 캐시된 데이터를 표시하지 않는 용도로 사용. | `boolean`                                                   |
| `isFetching`          | 쿼리 함수가 실행 중.(첫 대기 및 백그라운드 다시 가져오기 포함)                                              | `boolean`                                                   |
| `isLoading`           | 쿼리 함수의 첫 번째 가져오기가 진행 중. `isFetching && isPending`와 같음.                                   | `boolean`                                                   |
| `isLoadingError`      | 쿼리 함수의 첫 번째 가져오기 중 실패 여부.                                                                  | `boolean`                                                   |
| `isPaused`            | 쿼리 가져오기가 일시 중단됨.                                                                                | `boolean`                                                   |
| `isPending`           | 캐시된 데이터가 없고 쿼리가 아직 완료되지 않은 상태.                                                        | `boolean`                                                   |
| `isPlaceholderData`   | 표시된 데이터가 대체 데이터인지 여부.                                                                       | `boolean`                                                   |
| `isRefetchError`      | 쿼리가 다시 가져오기를 시도하는 중에 실패했는지 여부.                                                       | `boolean`                                                   |
| `isRefetching`        | 백그라운드에서 다시 가져오기가 진행 중인지의 여부. `isFetching && !isPending`와 같음.                       | `boolean`                                                   |
| `isStale`             | 캐시된 데이터가 무효화(Invalidated)되거나 `staleTime`이 경과된 여부.                                        | `boolean`                                                   |
| `isSuccess`           | 쿼리 데이터를 성공적으로 가져왔는지 여부.                                                                   | `boolean`                                                   |
| `refetch`             | 데이터를 새롭게 다시 가져오는 함수. `throwOnError: true` 옵션을 사용해야 오류가 발생.                       | `(options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>` |
| `status`              | 쿼리의 결과 상태. `'pending'`: 아직 완료되지 않음(`isPending`), `'error'`: 오류 발생(`isError`), `'success'`: 성공적으로 완료됨(`isSuccess`). | `'pending' \| 'error' \| 'success'`                         |

#### ✔️ 상태확인

- `isFetching` : 쿼리함수(queryFn)가 실행 중인지의 여부로, 데이터를 가져오는 중을 의미

- `isPending` : 캐시된 데이터가 없고 쿼리가 아직 완료되지 않은 상태의 여부로, initialData or placeholderData 옵션으로 데이터를 제공하면 출력 대기가 필요하지 않아서 false 반환 

- `isLoading` : isFetching `&&`isPending 과 같은 의미, 쿼리의 첫 번째 가져오기가 진행중인 경우

`refetch` 함수를 사용하여 데이터를 새롭게 가져오기도 합니다. 새로운 데이터가 아닌 캐시된 데이터가 필요할 때 `queryClient.getQueryData()` 메소드를 사용할 수 있습니다. 데이터가 상해도 새로 가져오는게 아니라 캐시된 데이터만 반환합니다.

---

### 📚 UseInfiniteQuery


---






[출처 : HEROPY.DEV](https://www.heropy.dev/p/HZaKIE)