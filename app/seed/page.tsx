'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { personalInfo, experiences, education, skills, projects } from '@/lib/data'
import { doc, setDoc, collection, addDoc, writeBatch } from 'firebase/firestore'

export default function SeedPage() {
    const [status, setStatus] = useState('Idle')

    const seedData = async () => {
        setStatus('Seeding...')
        try {
            const batch = writeBatch(db)

            // Profile
            // Remove image object, store placeholder or ignore
            const { profileImage, ...profileData } = personalInfo
            const profileRef = doc(db, 'profile', 'main')
            batch.set(profileRef, profileData)

            // Skills (Store as single doc for complex structure)
            const skillsRef = doc(db, 'skills', 'main')
            batch.set(skillsRef, skills)

            // Commit single docs first
            await batch.commit()

            // For collections, we iterate. Using simple loops for now (batch specific collections if small)
            // But batch has limit of 500. We are fine.
            // Actually, we can't delete easily without listing.
            // For seeding, we usually assume empty or overwrite.
            // Let's just overwrite specific IDs or add new?
            // "addDoc" adds random ID.

            // Experience
            // We'll iterate and setDoc with random ID or specific if we had one.
            for (const exp of experiences) {
                await addDoc(collection(db, 'experience'), exp)
            }

            // Education
            for (const edu of education) {
                await addDoc(collection(db, 'education'), edu)
            }

            // Projects
            for (const proj of projects) {
                await addDoc(collection(db, 'projects'), proj)
            }

            setStatus('Success! Database populated.')
        } catch (error) {
            console.error(error)
            setStatus('Error: ' + JSON.stringify(error))
        }
    }

    return (
        <div className="min-h-screen pt-32 text-center">
            <h1 className="text-3xl font-bold mb-4">Database Seeder</h1>
            <p className="mb-8 text-yellow-400">Warning: This may duplicate data if run multiple times.</p>
            <button
                onClick={seedData}
                className="px-6 py-3 bg-teal-500 rounded-full font-bold text-dark-900 hover:bg-white transition-colors"
            >
                Seed Firestore
            </button>
            <p className="mt-8 text-xl">{status}</p>
        </div>
    )
}
