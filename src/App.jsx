import { useState } from 'react'
import OnboardingFlow from './components/OnboardingFlow'
import CreatorDashboard from './components/CreatorDashboard'
import BrandDashboard from './components/BrandDashboard'

function App() {
  const [isOnboarded, setIsOnboarded] = useState(false)
  const [userType, setUserType] = useState('brand') // 'creator' or 'brand'

  const handleOnboardingComplete = (type) => {
    setUserType(type)
    setIsOnboarded(true)
  }

  const skipToDashboard = (type) => {
    setUserType(type)
    setIsOnboarded(true)
  }

  return (
    <div className="min-h-screen">
      {!isOnboarded ? (
        <>
          <OnboardingFlow onComplete={handleOnboardingComplete} />
          
          {/* Dev Skip Buttons */}
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
            <button
              onClick={() => skipToDashboard('creator')}
              className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-lg hover:bg-zinc-800 transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Skip to Creator Dashboard
            </button>
            <button
              onClick={() => skipToDashboard('brand')}
              className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg shadow-lg hover:bg-zinc-800 transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Skip to Brand Dashboard
            </button>
          </div>
        </>
      ) : (
        <>
          {userType === 'creator' ? <CreatorDashboard /> : <BrandDashboard />}
        </>
      )}
    </div>
  )
}

export default App
