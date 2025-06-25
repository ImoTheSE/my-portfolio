import type { Step } from '@/types/Step'

export const step2: Step = {
  title: 'ステップ2',
  description: '',
  formFields: [
    { name: 'email', label: 'メールアドレス', type: 'email', placeholder: 'example@example.com' }
  ],
  button1: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button2: [
    { label: '完了', actionKey: 'finish' }
  ]
}
