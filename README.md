# shadcn/ui with Astro and NextJS  Template

This template is for creating a monorepo with shadcn/ui, and serving through an Astro and NextJS apps


## Adding components

As of 12-28-2024, all shadcn-ui components have been added. When more get released this will be helpful. 
To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

### Note

The monorepo setup is still a WIP from the shadcn side of things. The CLI sometimes imports things incorrectly as well. 

So you may have to do something like

```diff
- import { cn } from '@workspace/lib/utils';
+ import { cn } from '@workspace/ui/li/utils';
```

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/ui/button"
```
