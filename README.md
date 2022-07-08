1. Список пользователей. Вывод списка, полученного по апи в виде карточек вида
[name,surname]

2. Страница пользователя. Подробный вывод информации о пользователе:
[name, email, phone, website, company[name,bs]
Список из 3-х превью (заголовок, 1 строчка текста...) постов пользователя + возможность посмотреть все посты.

3. Список постов пользователя. Все посты в формате превью + возможность перейти на детальную страницу.

4. Детальная страница поста со списком всех комментариев c именем и email. Также, внизу экрана добавить кнопку добавления комментария. По клику открывается форма с 3 полями имя, email, текст комментария и кнопкой "отправить/send". Отправка сделана на тот же сервис.
--------------------------------------------------------------------------------------------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
