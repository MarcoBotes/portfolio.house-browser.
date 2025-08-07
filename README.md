# Before Starting

## Time estimate: 5 hours (+ undisclosed for backend)

I expect assembling the UI won't take me very long. I am planning on building an actual little backend for showcase purposes and to add to my personal portfolio since this challenge was very interesting.

As a side note I am also going to challenge myself and build it in Next.js.

## Strategy

For the purposes of this showcase I am going to assume there is an admin interface where someone can draw a room on an image, then describe it and add images. This would equate to **more hours (10h I would guess)**, but for now I assume I am just making the frontfacing app to accept the data from an API and display the image with its overlayed rooms.

### Personal goals for 'Success'

- The rooms have visual feedback when mousing over them
- The 'active' room is also quite obvious
- The view of the room is built entirely dynamically - 100% Json to page (Ideally so this page can be used for any number of houses)

# Mid implementation notes


| Category | Milestone | Time (H) | Research | Implementation | Troubleshooting |
| --- | --- | --- | --- | --- | --- |
|| Get a Geometry object working | 0:45 | 20% | 30% | 50% |
|| Create API Endpoint to host static json | 0:20 | 90% | 10% | - |
| Page | SSR | 3:30 | 40% | 10% | 50% |
| Page | UI | 0:50 | 10% | 60% | 30% |
|| *Total* | *~6:00* ||||

## I have no idea how SSR should look like
For some reason the server side rendering is giving me a massive uphil. I keep getting multiple errors regarding _ReactPromise_'s that I need to await, but telling them to await causes the code to fail.

```tsx
export default async function HomePage({ params }: Props) {
  const { id } = params;
  const home = await getHome(id);
  ...
}
```
Logically speaking I understand that there would be some issues with having a clientside library in SSR, but as far as I understand I can minimize the component's that _'use client'_ to just the live components. But the samples language models give me and the docs I find online are all at odds with each other. I eventually got it working though - but ironically I am not sure what was the issue.

# After completing

**Final time count: _ hours**