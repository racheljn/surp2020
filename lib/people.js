import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export function getSortedPeoplesData( country ) {

  const peoplesDirectory = path.join(process.cwd(), `people/${country}`)
  // Get file names under /peoples
  const fileNames = fs.readdirSync(peoplesDirectory)
  const allPeoplesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(peoplesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the people metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort peoples by date
  return allPeoplesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPeoplesIds( country ) {
  const peoplesDirectory = path.join(process.cwd(), `people/${country}`)
  const fileNames = fs.readdirSync(peoplesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPeopleData(id, country) {
  const peoplesDirectory = path.join(process.cwd(), `people/${country}`)
  const fullPath = path.join(peoplesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the people metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
