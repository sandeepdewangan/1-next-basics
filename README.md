## NextJS

### Templates and Layouts

**Layouts** let developers define a common structure that stays intact across different routes without re-rendering. This is particularly useful for components like headers, footers, and sidebars that should remain consistent as users navigate through the app.

**Templates** in Next.js also act as UI shells that wrap around pages but with a key difference: a template is fully remounted every time a user navigates to a new page.

### Component Hierarchy

```react
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />>
            <Suspense fallback={<Loading />>
                <ErrorBoundary fallback={<NotFound />}>
                    <Page />
                </>
            </>
        </>
    </>
</>
```

- The error boundary don't catch error thrown by the layout.tsx.
- Move the error.tsx to one level up.
- The root layout doesnot have the parent element or we can't go one level up for root layout.
- We will handle these errors with global-error.tsx
- The global error capture error in production mode.

### Parallel Routes

Routing mechanism which used to render multiple pages simultaneouly within same layout.

Problem Statement: Suppose we have three different components which needs to be loaded simultaneously. We can opt traditional way of declaring components and a parallel approach. The parallel approach has some benifits.

Approach I: With traditional components.

Approach II: With Parallel routes.

- Parallel routes are defined using `slots`.
- To create a slot we need use `@folder` naming convention.

<img src="/public/parallel1.png" />

**Pros**

- Parallel routes are great for splitting a layout into managable slots.
- Independent route handling
  - Each slots can handle its own loading and error state.
  - Granular control.
- Sub-navigation.
  - Each slot act as a separate mini application, complete with its own navigation and state management.

### Unmatched Routes in Parallel Routes

Suppose we have 3 slots, and one of the slots navigate to other components, changing the main URL then when user reloads the page it shows 404 Page Not Found Error. Because the url has changed. To solve this issue use `default.tsx`.

### Intercepting Routes

- Allows to load another part of application within a current layout.
- The new component will be loaded like a modal. Refresh the component will take to the actual route.

Intercepting route conventions:

- `(.)` - to match segment on same level
- `(..)` - to match segment on one level up
- `(..)(..)` - to match segment on two level up
- `(...)` - to match segment from the root app dir
