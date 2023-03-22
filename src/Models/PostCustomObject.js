export class DiscussionPost {
    constructor(username, subject = "", body) {
        this.author = username;
        this.subject = subject;
        this.body = body;
    }
}

export const postConverter = {
    toFirestore: (post) => {
        return {
            author: post.author,
            subject: post.subject,
            body: post.body
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new DiscussionPost(data.author, data.subject, data.body);
    }
};