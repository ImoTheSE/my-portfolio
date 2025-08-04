import type { Step } from '@/types/Step'

export const step1: Step = {
  id: 's1',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    fontSize: 'clamp(25px, 4vw, 40px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'center',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  formFields: [
    { name: 'yearLevel', label: '', type: 'text', placeholder: '(全角のみ、四文字以内、入力必須)例：一年目' },
  ],
  formStyle: {
    position: 'absolute',
    top: '220px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '60%',
  },
  button2: [{ label: '次へ', actionKey: 'goToNext' }],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
  },
}
