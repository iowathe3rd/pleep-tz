export interface Post {
    id: string;
    title: string;
    content: string;
}

export interface CreatePostInput {
    title: string;
    content: string;
}

export interface DeletePostInput {
    id: string;
}
