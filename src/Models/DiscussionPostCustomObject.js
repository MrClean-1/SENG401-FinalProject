export class DiscussionPost {
    constructor(username, subject = "", body, documentID = "", timeStamp = Date.now()) {
        this.author = username;
        this.subject = subject;
        this.body = body;
        this.timeStamp = timeStamp;
        this.documentID = documentID
    }
}

export const postConverter = {
    toFirestore: (post) => {
        return {
            author: post.author,
            subject: post.subject,
            body: post.body,
            documentID: post.documentID,
            timeStamp: post.timeStamp
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new DiscussionPost(data.author, data.subject, data.body, data.documentID, data.timeStamp);
    }
};