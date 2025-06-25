import type { Step } from '@/types/Step'

export const step1: Step = {
  title: 'ステップ1',
  description: '',
  descriptionStyle: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: '40px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  formFields: [
    { name: '', label: '', type: 'textarea', placeholder: '例：一年目' }
  ],
  formStyle: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '60%'
  },
  button1: [
    { label: '次へ', actionKey: 'goToNext' }
  ],
  button1Style: {
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: 'ヘルプ', actionKey: 'showHelp' }
  ],
  button2Style: {
    position: 'absolute',
    top: '70%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
}
