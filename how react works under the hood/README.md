React.memo -> will cause React to skip rendering a component if its props have not changed.

## Reconciliation

Reconciliation is a key feature of React that efficiently updates the DOM by only
making necessary changes. Although its a complex process, but here are
the basic steps that it follows.

**The reconciliation process involves the following key steps:**

1. React creates a virtual DOM, which is the lightweight copy of the real DOM in the object form.
2. With every change in the component state or props, React creates a new virtual DOM.
3. React uses a **diffing** algorithm which traverses the tree to compare/analyze the changes between the new virtual DOM and the previous one.
4. The above step helps to determine which component needs to be re-rendered on the real DOM.
5. Finally, the changes are made to actual/real DOM.

Diffing algorithm ensures that the minimum changes are to be made on the actual/real DOM.

Despite multiple state changes, due to the reconciliation process, the real DOM is updated only once, ensuring efficient rendering and a smooth user experience.
