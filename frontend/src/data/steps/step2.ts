import type { Step } from '@/types/Step'

export const step2: Step = {
  id: 's2',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: 'clamp(20px, 4vw, 40px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  formFields: [
    { name: 'programmingLanguage', label: '', type: 'textarea', placeholder: '例：javascriptとruby' }
  ],
  formStyle: {
    position: 'absolute',
    top: '220px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '60%'
  },
  button1: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button1Style: {
    position: 'absolute',
    top: '420px',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: '次へ', actionKey: 'goToNext' }
  ],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
}
