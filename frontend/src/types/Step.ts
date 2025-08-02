export interface StepButton {
  label: string
  actionKey: string
}

export interface ButtonStyleDefinition {
  display?: string
  position?: string
  top?: string
  left?: string
  transform?: string
  maxWidth?: string
  minWidth?: string
  backgroundColor?: string
  [key: string]: string | undefined
}

export interface StepFormField {
  name: string
  label: string
  type: 'text' | 'number' | 'email' | 'password' | 'textarea'
  placeholder?: string
  required?: boolean
}

export interface FormStyleDefinition {
  position?: string
  top?: string
  left?: string
  transform?: string
  maxWidth?: string
  minWidth?: string
  backgroundColor?: string
  [key: string]: string | undefined
}

export interface descriptionsStyleDefinition {
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static'
  top?: string // 例: '50%'
  left?: string // 例: '50%'
  transform?: string // 例: 'translate(-50%, -50%)'
  color?: string
  fontSize?: string
  fontWeight?: string
  textDecoration?: string
  lineHeight?: string
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
  wordBreak?: string
  overflowWrap?: string
  maxWidth?: string
  whitespace?: string
  display?: string
  alignitems?: string /* ← 縦方向の中央揃え */
  justifycontent?: string /* ← 横方向の中央揃え */
  [key: string]: string | undefined
}

export interface Step {
  id: string
  title: string
  description: string[]
  description1Style?: descriptionsStyleDefinition
  description2Style?: descriptionsStyleDefinition
  button1?: StepButton[]
  button2?: StepButton[]
  button3?: StepButton[]
  button4?: StepButton[]
  formFields?: StepFormField[]
  formStyle?: FormStyleDefinition
  layoutComponent?: string //components/FlowのどのStepLayoutを使うかの設定
  button1Style?: ButtonStyleDefinition // 個別に直接持つ
  button2Style?: ButtonStyleDefinition // 個別に直接持つ
  button3Style?: ButtonStyleDefinition // 個別に直接持つ
  button4Style?: ButtonStyleDefinition // 個別に直接持つ
}
