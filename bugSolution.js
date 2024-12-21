```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); //Adding AbortController to handle cleanup and prevent memory leaks
    const signal = controller.signal;
    async function fetchData(){
      setIsLoading(true);
      try{
        const response = await fetch('/api/data', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
      // Cleanup function is invoked when the component unmounts or when a new effect runs
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Count: {count}</div>;
}
```