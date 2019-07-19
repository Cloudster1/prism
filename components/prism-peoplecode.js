Prism.languages.peoplecode = {
    'keyword': /\b(?:any|boolean|time|date|datetime|string|float|integer|number)\b/,
    'builtin': /\b(?:Field|Record|Row|Rowset|AnalyticGrid|Chart|Gantt|Grid|GridColoum|OrgChart|Page|RatingBoxChart|Cookie|Request|Response)\b/,
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true
        },
        {
            pattern: /(^|[^\\])<\*[\s\S]*?(?:\*>|$)/,
            lookbehind: true
        },
        {
            pattern: /Rem.*;/,
            lookbehind: true,
            greedy: true
        }
    ],
    'boolean': /\b(?:True|False)\b/,
    'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
}