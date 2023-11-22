'use client'
import { auth } from '@/libs/firebase'
import { GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth'
import { createContext, useState, useEffect, ReactNode } from 'react'

interface GithubSessionData {
  user: User | null
  githubSignIn: () => void
  logOut: () => void
  isLoadingSession: boolean,
}

export const GithubSession = createContext({} as GithubSessionData)

export default function GithubSessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoadingSession, setIsLoadingSession] = useState(true)

  const githubSignIn = () => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setIsLoadingSession(false)
      setUser(currentUser)
    })
  }, [user])


  return <GithubSession.Provider value={{ user, githubSignIn, logOut, isLoadingSession }}>{children}</GithubSession.Provider>
}