import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  console.log(text);

  // const openai = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       content:
  //         '내가 어떤 강아지에 대한 설명을 줄게. 너의 할일은 한국어로 강아지의 이름의 리스트 10개를 만드는거야. 긍정적인 느낌을 표현하는 "뽀삐" 또는 "쿠키" 처럼 3글자를 넘지 않는 강아지 이름으로 부르기 적합한 경쾌하고 가벼운 이름이면 좋아.',
  //       role: "system",
  //     },
  //     {
  //       content: `견종: 닥스훈트, 특징: 다리가 짧음`,
  //       role: "user",
  //     },
  //   ],
  //   temperature: 0.8,
  //   max_tokens: 60,
  // });

  return NextResponse.json(
    /* { result: response.choices[0].message.content } */ {
      result: `1. 뽀삐\n2. 쿠키\n3. 깜찍이\n4. 맥심\n5. 미니\n6. 코코\n7. 토리\n8. 댕댕`,
    },
  );
}
