<template>
  <main class="flex flex-col gap-4">
    <UContainer class ="text-right">
      <form>
        <UInput placeholder="お名前" class="w-40" />
        <UTextarea placeholder="本文" />
        <UButton>投稿</UButton>
      </form>
    </UContainer>

    <UCard>
      <p>
        <span class="font-bold text-green-600">名無しさん</span>
        <span>:</span>
        <Nuxtlink to="/abc123" class="underline">2025年5月18日 日曜日 15:11</Nuxtlink>
      </p>

      <UContainer>
        <p class="whitespace-break-spaces">本文テキスト</p>
      </UContainer>
    </UCard>
  </main>
</template>