import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostRepository {
  createPost(body: CreatePostDto) {
    return;
  }

  deletePost() {
    return;
  }
}
