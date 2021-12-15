/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
export default [
    {
        path: '/', component: UserLayout, routes: [
            {path: '/user/article-collections', component: UserArticleCollections},
            {path: '/', component: UserArticles},
        ]
    }
]
