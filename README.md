# Texty, a tool for writing dynamically texts in fictions

## Gender conversion

In french

```
<:'elle','il'> est né<:'e',> à Lyon.
```

Will become, if gender narrator is female associated:
```
elle est née à Lyon
```

## Dynamic text

We can inject dynamic value inside text with the following syntax:

```
<:name> is a person.
```

## Conditional text (wip)

```
<:if(sanity > 4)"You read the article", "You try to read but you don't understand anything.">
```