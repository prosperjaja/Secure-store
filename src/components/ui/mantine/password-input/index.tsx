import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps,
} from "@mantine/core";
import { Eye, EyeSlash } from "iconsax-reactjs";

export const PasswordInput = (props: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      {...props}
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <EyeSlash size={14} className="text-gray-500" color="#0B1532" />
        ) : (
          <Eye size={14} className="text-gray-500" color="#0B1532" />
        )
      }
    />
  );
};
