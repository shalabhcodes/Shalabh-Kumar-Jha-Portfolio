<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Use separate file-based content routes for portfolio sections, wrapped in a shared portfolio shell, so navigation and page metadata stay consistent.
- Keep portfolio visual tokens and reusable presentation classes in the global stylesheet, so all pages preserve the selected design.
- Treat missing profiles, project evidence and awards as clearly labelled placeholders; never simulate contact delivery or earned credentials.
