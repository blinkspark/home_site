import Link from "next/link"
const Pagination = ({ current, total }) => {
  current = Number(current)
  total = Number(total)
  let first = {
    isActive: false,
    isDisable: false,
    content: "<<",
    href: `/`,
  }
  let pre = {
    isActive: false,
    isDisable: current - 1 < 1 ? true : false,
    content: "<",
    href: `/?page=${current - 1 < 1 ? 1 : current - 1}`,
  }
  let c = {
    isActive: true,
    isDisable: false,
    content: `${current}`,
    href: `/?page=${current}`,
  }
  let next = {
    isActive: false,
    isDisable: current + 1 > total - 1 ? true : false,
    content: ">",
    href: `/?page=${current + 1 > total - 1 ? total - 1 : current + 1}`,
  }
  let last = {
    isActive: false,
    isDisable: false,
    content: ">>",
    href: `/?page=${total}`,
  }
  let arr = [first, pre, c, next, last]
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {arr.map(v => (
          <li
            className={`page-item${v.isActive ? " active" : ""}${
              v.isDisable ? " disable" : ""
            }`}
            key={v.content}
          >
            <Link href={v.isDisable ? "" : v.href}>
              <a className="page-link">{v.content}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
