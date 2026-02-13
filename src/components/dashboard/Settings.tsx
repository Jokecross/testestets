import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const tabs = ['Profil', 'Organisation', 'Facturation', 'Sécurité']

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profil')
  const { user } = useAuth()
  const initials = user?.user_metadata?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || '?'

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Paramètres</h1>
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
        {tabs.map((t) => (<button key={t} onClick={() => setActiveTab(t)} className={`px-4 py-2 rounded-md text-sm transition-colors ${activeTab === t ? 'bg-white text-gray-900 font-medium shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{t}</button>))}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl">
        {activeTab === 'Profil' && (
          <div className="space-y-6">
            <div className="flex items-center gap-4"><div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center"><span className="text-lg font-semibold text-gray-400">{initials}</span></div><button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Changer la photo</button></div>
            <div><label className="block text-xs font-medium text-gray-700 mb-1.5">Nom complet</label><input type="text" defaultValue={user?.user_metadata?.full_name || ''} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" /></div>
            <div><label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label><input type="email" defaultValue={user?.email || ''} disabled className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-400 bg-gray-50" /></div>
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Sauvegarder</button>
          </div>
        )}
        {activeTab === 'Organisation' && (
          <div className="space-y-6">
            <div><label className="block text-xs font-medium text-gray-700 mb-1.5">Nom de l'organisation</label><input type="text" placeholder="Nom de votre entreprise" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" /></div>
            <div><label className="block text-xs font-medium text-gray-700 mb-1.5">Logo</label><div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center"><p className="text-sm text-gray-400">Glissez votre logo ici ou cliquez pour uploader</p></div></div>
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Sauvegarder</button>
          </div>
        )}
        {activeTab === 'Facturation' && (
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold text-gray-900">Plan Pro</p><p className="text-xs text-gray-500 mt-0.5">79 €/mois — Renouvellement le 15 mars 2025</p></div><span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">Actif</span></div></div>
            <div className="flex gap-3"><button className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Changer de plan</button><button className="border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Gérer le paiement</button></div>
          </div>
        )}
        {activeTab === 'Sécurité' && (
          <div className="space-y-6">
            <div><h3 className="text-sm font-semibold text-gray-900 mb-4">Changer le mot de passe</h3><div className="space-y-3"><input type="password" placeholder="Ancien mot de passe" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" /><input type="password" placeholder="Nouveau mot de passe" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors" /><button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Mettre à jour</button></div></div>
          </div>
        )}
      </div>
    </div>
  )
}
