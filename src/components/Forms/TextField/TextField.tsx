import React, { useId } from "react";
//
import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  OutlinedInputProps,
  Select,
  TextFieldProps as MuiTextFieldProps,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

/**
 * Custom component based on MUI TextField component.
 *
 * https://mui.com/material-ui/api/text-field/
 */
export type TextFieldProps = Omit<
  MuiTextFieldProps,
  "variant" | "InputProps"
> & {
  /**
   * Text that appear only when error is `true`.
   */
  errorText?: string;
  /**
   * Props applied to the Input element
   */
  InputProps?: OutlinedInputProps;
};

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  function TextField(props: MuiTextFieldProps & TextFieldProps, ref) {
    const {
      // Custom props
      errorText,
      // Mui Textfield props
      autoComplete,
      children,
      className,
      defaultValue,
      disabled = false,
      error = false,
      fullWidth = false,
      helperText,
      id,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      InputLabelProps,
      ...other
    } = props;

    const InputMore = {} as OutlinedInputProps;

    if (select) {
      // unset defaults from textbox inputs
      if (!SelectProps || !SelectProps.native) {
        InputMore.id = undefined;
      }
      InputMore["aria-describedby"] = undefined;
    }
    const generateId = useId();
    const isEmpty = !value;
    const fieldId = id ?? generateId;
    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = label && id ? `${id}-label` : undefined;

    const InputElement = (
      <OutlinedInput
        id={fieldId}
        placeholder={placeholder}
        aria-describedby={helperTextId}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        multiline={multiline}
        name={name}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        type={type}
        value={value}
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        inputProps={inputProps}
        sx={(theme) => ({
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: !isEmpty ? theme.palette.grey[900] : undefined,
          },
        })}
        {...InputMore}
        {...InputProps}
      />
    );
    return (
      <FormControl
        ref={ref}
        className={className}
        error={error}
        disabled={disabled}
        fullWidth={fullWidth}
        {...other}
      >
        <FormLabel
          htmlFor={fieldId}
          {...InputLabelProps}
          error={false}
          focused={false}
        >
          {label}{" "}
          {!required && (
            <Typography
              component="span"
              variant="l2"
              color="grey.400"
              fontWeight={400}
            >
              (Optional)
            </Typography>
          )}
        </FormLabel>
        {select ? (
          <Select
            id={fieldId}
            labelId={inputLabelId}
            value={value}
            input={InputElement}
            {...SelectProps}
          >
            {children}
          </Select>
        ) : (
          InputElement
        )}

        {error && errorText && (
          <FormHelperText
            error={error}
            sx={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <InfoIcon sx={{ fontSize: 16 }} />
            {errorText}
          </FormHelperText>
        )}
        <FormHelperText error={false}>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);
