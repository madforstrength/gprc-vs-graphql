const SystemResolvers = {
  Query: {
    news: (root: any, args: any, context: any) => {
      return {
        id: "2",
        title: "Note 2",
        body: "Content 2",
        postImage: "Post image 2"
      }
    }
  }
}

export default SystemResolvers
