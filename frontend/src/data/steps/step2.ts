import type { Step } from '@/types/Step'

export const step2: Step = {
  title: 'ステップ2',
  description: '',
  formFields: [
    { name: 'email', label: 'メールアドレス', type: 'email', placeholder: 'example@example.com' }
  ],
  buttons: [
    { label: '戻る', actionKey: 'goToPrevious' },
    { label: '完了', actionKey: 'finish' }
  ]
}
