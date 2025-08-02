import type { Step } from '@/types/Step'

export const step12: Step = {
  id: 's12',
  title: '',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(12px, 2vw, 22px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'start',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  button1: [
    { label: '戻る', actionKey: 'goToPrevious3' }
  ],
  button1Style: {
    position: 'absolute',
    top: '420px',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    width: '25vw',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  },
  button2: [
    { label: '最初に戻る', actionKey: 'goToStart' }
  ],
  button2Style: {
    position: 'absolute',
    top: '420px',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: '25vw',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  }
}
