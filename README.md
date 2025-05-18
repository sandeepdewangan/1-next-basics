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
