# useEffect 

The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies,After your component is removed from the DOM, React will run your cleanup function.

useEffect(() => {
    //setup function
    
}, []) <- dependecy array
