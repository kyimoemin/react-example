/**
 * use case of useEffect and useCallback
 */

import React, { useDeferredValue, useState } from "react";

export function Example6() {

  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);

  function factorial(n) {
    if (n < 1) return 1;
    return n * factorial(n - 1);
  }


  return <div>
    <p >number: {count}</p>
    <p>factorial: {factorial(deferredCount)}</p>
    <button onClick={() => { setCount(c => c + 1); }}>increase</button>
  </div>;
}
