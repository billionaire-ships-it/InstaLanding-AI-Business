'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Label from '@/components/ui/Label'
import { Card, CardContent } from '@/components/ui/Card'
import { Loader2 } from 'lucide-react'



export default function MarketingAIPage() {
  const [assetType, setAssetType] = useState('Ad Copy')
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setOutput('')
    setLoading(true)
    const res = await fetch('/api/generate-marketing', {
      method: 'POST',
      body: JSON.stringify({ assetType, prompt }),
    })

    if (!res.body) {
      setLoading(false)
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      const chunk = decoder.decode(value)
      setOutput(prev => prev + chunk)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎯 Marketing AI Generator</h1>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <Label htmlFor="assetType">Asset Type</Label>
            <select
              id="assetType"
              value={assetType}
              onChange={e => setAssetType(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
            >
              <option>Ad Copy</option>
              <option>Email Subject</option>
              <option>Product Description</option>
            </select>
          </div>

          <div>
            <Label htmlFor="prompt">What is it about?</Label>
            <Input
              id="prompt"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="E.g. AI landing page builder for entrepreneurs"
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="w-full"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Generate'}
          </Button>
        </CardContent>
      </Card>

      {output && (
        <div className="p-4 border rounded-md bg-gray-100 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  )
}
