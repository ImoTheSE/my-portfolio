import type { Step } from '@/types/Step'

export const step1: Step = {
  title: 'ステップ1',
  description: '',
  formFields: [
    { name: '', label: '', type: 'text', placeholder: '例：一年目' }
  ],
  buttons: [
    { label: '次へ', actionKey: 'goToNext' },
    { label: 'ヘルプ', actionKey: 'showHelp' }
  ]
}
