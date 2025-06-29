import type { Step } from '@/types/Step'

export const step3: Step = {
  title: 'ステップ3',
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
  button1: [
    { label: 'ログって何？', actionKey: 'goToNext2' }
  ],
  button1Style: {
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: 'ない', actionKey: 'goToNext' }
  ],
  button2Style: {
    position: 'absolute',
    top: '70%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button3: [
    { label: 'ある', actionKey: 'goToNext3' }
  ],
  button3Style: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button4: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button4Style: {
    position: 'absolute',
    top: '80%',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
