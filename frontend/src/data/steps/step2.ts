import type { Step } from '@/types/Step'

export const step2: Step = {
  id: 's2',
  title: 'ステップ2',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: 'clamp(25px, 4vw, 40px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  formFields: [
    { name: 'step2', label: '', type: 'textarea', placeholder: '例：一年目' }
  ],
  formStyle: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '60%'
  },
  button1: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button1Style: {
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: '次へ', actionKey: 'goToNext' }
  ],
  button2Style: {
    position: 'absolute',
    top: '70%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
}
