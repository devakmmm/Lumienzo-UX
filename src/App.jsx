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

  return (
    <div className="min-h-screen">
      {!isOnboarded ? (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      ) : (
        <>
          {userType === 'creator' ? <CreatorDashboard /> : <BrandDashboard />}
        </>
      )}
    </div>
  )
}

export default App
