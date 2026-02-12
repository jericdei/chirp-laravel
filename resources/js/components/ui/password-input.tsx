import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useId, useState } from "react"
import { Button } from "./button"
import { InputProps } from "./input"

export function PasswordInput({
  label,
  error,
  id,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Field className="flex flex-col gap-2">
      {label && (
        <Label className="text-sm font-medium" htmlFor={inputId}>
          {label} {props.required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <InputGroup>
        <InputGroupInput
          id={inputId}
          type={showPassword ? "text" : "password"}
          aria-invalid={!!error}
          {...props}
        />
        <InputGroupAddon align="inline-end">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {error && (
        <p className="text-sm text-red-500 wrap-break-word" role="alert">
          {error}
        </p>
      )}
    </Field>
  )
}
