import type { Step } from '@/types/Step'

export const step6: Step = {
  id: 's6',
  title: 'ステップ6',
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
    { label: '戻る', actionKey: 'goToPrevious3' }
  ],
  button1Style: {
    position: 'absolute',
    top: '70%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button2: [
    { label: 'エラー箇所を特定した', actionKey: 'goToNext' }
  ],
  button2Style: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  },
  button3: [
    { label: 'ログの読み方がわからない', actionKey: 'goToChatGPT' }
  ],
  button3Style: {
    position: 'absolute',
    top: '70%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    minWidth: '15%'
  }
}
