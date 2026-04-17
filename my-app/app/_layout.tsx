import { Stack } from 'expo-router';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useEffect } from 'react';

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  console.error("ERRO: EXPO_PUBLIC_CONVEX_URL não definida no .env");
}

const convex = new ConvexReactClient(convexUrl || "");

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ConvexProvider>
  );
}