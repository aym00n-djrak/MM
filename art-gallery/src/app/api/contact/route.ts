import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validation basique
    const { name, email, subject, message, category, phone } = body
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    // Ici vous pourriez :
    // 1. Sauvegarder en base de données
    // 2. Envoyer un email avec Resend, SendGrid, etc.
    // 3. Intégrer avec un CRM
    
    console.log('Nouveau message de contact:', {
      name,
      email,
      subject,
      category,
      message,
      phone,
      timestamp: new Date().toISOString()
    })

    // Simulation d'un délai
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès'
    })
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
