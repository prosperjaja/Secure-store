import {
  Button,
  Checkbox,
  createTheme,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { colors } from "./colors";

import buttonStyles from "./mantine/button/button.module.css";
import textInputStyles from "./mantine/TextInput/text-input.module.css";
import checkboxStyles from "./mantine/checkbox/checkbox.module.css";
import passwordInputStyles from "./mantine/password-input/password-input.module.css";
import selectStyles from "./mantine/select/select.module.css";
import textareaStyles from "./mantine/textarea/textarea.module.css";

export const theme = createTheme({
  colors,
  black: "#000",
  primaryColor: "blue",
  cursorType: "pointer",
  fontFamily: "Inter, sans-serif",
  components: {
    Button: Button.extend({
      classNames: buttonStyles,
    }),
    TextInput: TextInput.extend({
      classNames: textInputStyles,
    }),
    Checkbox: Checkbox.extend({
      classNames: checkboxStyles,
    }),
    PasswordInput: PasswordInput.extend({
      classNames: passwordInputStyles,
    }),
    Select: Select.extend({
      classNames: selectStyles,
    }),
    Textarea: Textarea.extend({
      classNames: textareaStyles,
    }),
  },
});
