import type { Step } from '@/types/Step'

export const step4: Step = {
  id: 's4',
  title: 'ステップ4',
  description: [],
  description1Style: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#333',
    fontSize: 'clamp(18px, 2vw, 30px)',
    fontWeight: 'normal',
    lineHeight: '1.5',
    textAlign: 'start',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    minWidth: '90vw',
    whitespace: 'pre-wrap'
  },
  button1: [
    { label: '戻る', actionKey: 'goToPrevious' }
  ],
  button1Style: {
    position: 'absolute',
    top: '90%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
