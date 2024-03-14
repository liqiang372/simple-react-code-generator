# Simple React Code Generator

it will generator some initial skeleton code based on file name

if your file name is ProfileAvatar.tsx,

after creating the file, run cmd + shift + p, and choose `Simple React: Generate code based on file name`

it will generate

```tsx
import React, { FC } from "react";

export interface ProfileAvatarProps {
  className?: string;
}

export const ProfileAvatar: FC<ProfileAvatarProps> = ({ className }) => {
  return <div className={className}> ProfileAvatar Component </div>;
};
```
