export interface StepButton {
  label: string
  actionKey: string
}

export interface StepFormField {
  name: string
  label: string
  type: 'text' | 'number' | 'email' | 'password' | 'textarea'
  placeholder?: string
  required?: boolean
}

export interface Step {
  title: string
  description: string
  buttons?: StepButton[]
  formFields?: StepFormField[]
  layoutComponent?: string //components/FlowのどのStepLayoutを使うかの設定
}
